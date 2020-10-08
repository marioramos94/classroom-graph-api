DROP TABLE IF EXISTS users;
CREATE TYPE USER_DOCUMENT_TYPE as ENUM('PASSPORT', 'DNI');
CREATE TYPE USER_GENDER as ENUM('FEMALE', 'MALE');
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL,
  name VARCHAR(25),
  is_admin BOOLEAN DEFAULT FALSE,
  last_name VARCHAR(25),  
  document_type USER_DOCUMENT_TYPE,
  document VARCHAR(11),
  gender USER_GENDER,  
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  updated_at TIMESTAMPTZ
);

DROP TABLE IF EXISTS teachers;
CREATE table teachers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  last_name VARCHAR(100),
  code VARCHAR(100),
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  updated_at TIMESTAMPTZ
);

DROP TABLE IF EXISTS courses;
CREATE table courses (
  id SERIAL PRIMARY KEY,
  teacher_id int NOT NULL,
  name VARCHAR(100),
  code VARCHAR(100),
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  updated_at TIMESTAMPTZ,
  FOREIGN KEY (teacher_id) REFERENCES teachers(id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS courses_users;
CREATE table courses_users (
  id SERIAL PRIMARY KEY,
  course_id int NOT NULL,
  user_id int NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  updated_at TIMESTAMPTZ,
  FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
