-- Seed data for Enterprise DevSecOps Platform
-- Insert initial/mock data for testing and development here.

-- Example admin user seed (password: 'admin123' hashed with bcrypt/argon2 in real applications)
INSERT INTO users (username, email, password_hash)
VALUES ('admin', 'admin@devsecops.local', '$2b$10$SampleHashForDevelopmentOnly')
ON CONFLICT (username) DO NOTHING;
