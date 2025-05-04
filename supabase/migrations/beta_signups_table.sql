-- Create a table for beta signups
CREATE TABLE IF NOT EXISTS beta_signups (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT NOT NULL UNIQUE,
  organization TEXT,
  role TEXT,
  plan_name TEXT,
  source TEXT,
  signed_up_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  contacted BOOLEAN DEFAULT FALSE,
  notes TEXT
);

-- Create an index on the email column for faster lookups
CREATE INDEX IF NOT EXISTS beta_signups_email_idx ON beta_signups (email);

-- Set up Row Level Security (RLS)
ALTER TABLE beta_signups ENABLE ROW LEVEL SECURITY;

-- Create policies
-- Allow admins to read all rows
CREATE POLICY "Admins can view all beta signups" 
  ON beta_signups FOR SELECT 
  USING (auth.role() = 'authenticated');

-- Allow the service role to insert new signups
CREATE POLICY "Service role can insert beta signups" 
  ON beta_signups FOR INSERT 
  WITH CHECK (true);

-- Allow the service role to update signups
CREATE POLICY "Service role can update beta signups" 
  ON beta_signups FOR UPDATE 
  USING (true);
