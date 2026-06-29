const fs = require('fs');
const path = require('path');

const LOGS_DIR = path.join(__dirname, '..', '..', 'logs');

// Ensure logs directory exists
if (!fs.existsSync(LOGS_DIR)) {
  fs.mkdirSync(LOGS_DIR, { recursive: true });
}

const colors = {
  reset: '\x1b[0m',
  info: '\x1b[36m', // Cyan
  warn: '\x1b[33m', // Yellow
  error: '\x1b[31m', // Red
  debug: '\x1b[90m', // Gray
};

const formatMessage = (level, message, meta = '') => {
  const timestamp = new Date().toISOString();
  const metaString = meta ? ` | ${JSON.stringify(meta)}` : '';
  const consoleLevel = `${colors[level] || ''}${level.toUpperCase()}${colors.reset}`;
  
  return {
    console: `[${timestamp}] [${consoleLevel}]: ${message}${metaString}`,
    file: JSON.stringify({ timestamp, level, message, meta }) + '\n',
  };
};

const writeToFile = (file, data) => {
  try {
    fs.appendFileSync(path.join(LOGS_DIR, file), data);
  } catch (err) {
    console.error('Failed to write log to file:', err.message);
  }
};

const logger = {
  info: (message, meta) => {
    const formatted = formatMessage('info', message, meta);
    console.log(formatted.console);
    writeToFile('combined.log', formatted.file);
  },
  warn: (message, meta) => {
    const formatted = formatMessage('warn', message, meta);
    console.warn(formatted.console);
    writeToFile('combined.log', formatted.file);
  },
  error: (message, meta) => {
    const formatted = formatMessage('error', message, meta);
    console.error(formatted.console);
    writeToFile('combined.log', formatted.file);
    writeToFile('error.log', formatted.file);
  },
  debug: (message, meta) => {
    if (process.env.NODE_ENV !== 'production') {
      const formatted = formatMessage('debug', message, meta);
      console.log(formatted.console);
    }
  }
};

module.exports = logger;
