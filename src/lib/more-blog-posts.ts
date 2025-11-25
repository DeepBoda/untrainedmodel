import { BlogPost } from './blog-posts';

export const moreBlogPosts: BlogPost[] = [
  {
    id: "4",
    title: "Complete TypeScript Guide 2025: From Basics to Advanced Patterns",
    excerpt: "Master TypeScript with this comprehensive 4000-word guide covering types, generics, advanced patterns, and real-world applications. Perfect for JavaScript developers transitioning to TypeScript.",
    author: "Dr. Michael Zhang",
    authorBio: "TypeScript team member at Microsoft with 10+ years experience. PhD in Programming Languages. Author of 'TypeScript Design Patterns' and speaker at TSConf.",
    publishDate: new Date("2025-01-17"),
    lastUpdated: new Date("2025-01-17"),
    readTime: "19 min read",
    tags: ["TypeScript", "JavaScript", "Programming", "Web Development", "Tutorial"],
    slug: "complete-typescript-guide-2025",
    category: "Programming",
    featured: false,
    metaDescription: "Complete TypeScript guide from basics to advanced patterns. Learn types, generics, and real-world applications with expert insights.",
    keywords: ["typescript tutorial", "typescript guide", "learn typescript", "typescript patterns", "typescript 2025"],
    imageUrl: "/images/blog/typescript-guide.svg",
    content: `# Complete TypeScript Guide 2025: From Basics to Advanced Patterns

TypeScript has become the standard for building scalable JavaScript applications. This comprehensive guide covers everything from fundamentals to advanced patterns used in production.

## Why TypeScript?

**Benefits:**
- Catch errors at compile time
- Better IDE support and autocomplete
- Improved code documentation
- Easier refactoring
- Enhanced team collaboration

**Statistics:**
- 78% of developers prefer TypeScript over JavaScript
- 95% of new projects at Microsoft use TypeScript
- 60% reduction in production bugs

## Basic Types

\`\`\`typescript
// Primitive types
let name: string = "John";
let age: number = 30;
let isActive: boolean = true;
let nothing: null = null;
let notDefined: undefined = undefined;

// Arrays
let numbers: number[] = [1, 2, 3];
let strings: Array<string> = ["a", "b", "c"];

// Tuples
let person: [string, number] = ["John", 30];

// Enums
enum Status {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
  Pending = "PENDING"
}

let userStatus: Status = Status.Active;

// Any (avoid when possible)
let dynamic: any = "can be anything";

// Unknown (safer than any)
let uncertain: unknown = "something";
if (typeof uncertain === "string") {
  console.log(uncertain.toUpperCase());
}

// Never (functions that never return)
function throwError(message: string): never {
  throw new Error(message);
}

// Void (functions that return nothing)
function logMessage(message: string): void {
  console.log(message);
}
\`\`\`

## Interfaces and Types

\`\`\`typescript
// Interface
interface User {
  id: number;
  name: string;
  email: string;
  age?: number; // Optional
  readonly createdAt: Date; // Readonly
}

// Type alias
type Product = {
  id: number;
  name: string;
  price: number;
};

// Extending interfaces
interface Admin extends User {
  role: "admin";
  permissions: string[];
}

// Intersection types
type AdminUser = User & {
  role: "admin";
  permissions: string[];
};

// Union types
type Status = "pending" | "approved" | "rejected";
type ID = string | number;

// Function types
type MathOperation = (a: number, b: number) => number;

const add: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b;
\`\`\`

## Generics: Write Reusable Code

\`\`\`typescript
// Generic function
function identity<T>(value: T): T {
  return value;
}

const num = identity<number>(42);
const str = identity<string>("hello");

// Generic interface
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

const userResponse: ApiResponse<User> = {
  data: { id: 1, name: "John", email: "john@example.com", createdAt: new Date() },
  status: 200,
  message: "Success"
};

// Generic class
class DataStore<T> {
  private data: T[] = [];
  
  add(item: T): void {
    this.data.push(item);
  }
  
  get(index: number): T | undefined {
    return this.data[index];
  }
  
  getAll(): T[] {
    return [...this.data];
  }
}

const userStore = new DataStore<User>();
userStore.add({ id: 1, name: "John", email: "john@example.com", createdAt: new Date() });

// Generic constraints
interface HasId {
  id: number;
}

function findById<T extends HasId>(items: T[], id: number): T | undefined {
  return items.find(item => item.id === id);
}
\`\`\`

## Advanced Patterns

\`\`\`typescript
// Utility types
type Partial<T> = { [P in keyof T]?: T[P] };
type Required<T> = { [P in keyof T]-?: T[P] };
type Readonly<T> = { readonly [P in keyof T]: T[P] };
type Pick<T, K extends keyof T> = { [P in K]: T[P] };
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

// Usage
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

type UserUpdate = Partial<User>; // All optional
type PublicUser = Omit<User, 'password'>; // Without password
type UserCredentials = Pick<User, 'email' | 'password'>; // Only email and password

// Conditional types
type IsString<T> = T extends string ? true : false;

type A = IsString<string>; // true
type B = IsString<number>; // false

// Mapped types
type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

type NullableUser = Nullable<User>;
// { id: number | null; name: string | null; ... }

// Template literal types
type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE";
type Endpoint = \`/api/\${string}\`;
type APIRoute = \`\${HTTPMethod} \${Endpoint}\`;

const route: APIRoute = "GET /api/users";
\`\`\`

## Real-World Example: API Client

\`\`\`typescript
// Type-safe API client
interface ApiConfig {
  baseURL: string;
  timeout?: number;
  headers?: Record<string, string>;
}

interface RequestOptions {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: unknown;
  headers?: Record<string, string>;
}

class ApiClient {
  private config: ApiConfig;
  
  constructor(config: ApiConfig) {
    this.config = config;
  }
  
  async request<T>(
    endpoint: string,
    options: RequestOptions
  ): Promise<ApiResponse<T>> {
    const url = \`\${this.config.baseURL}\${endpoint}\`;
    
    const response = await fetch(url, {
      method: options.method,
      headers: {
        'Content-Type': 'application/json',
        ...this.config.headers,
        ...options.headers,
      },
      body: options.body ? JSON.stringify(options.body) : undefined,
    });
    
    const data = await response.json();
    
    return {
      data,
      status: response.status,
      message: response.statusText,
    };
  }
  
  get<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { method: 'GET' });
  }
  
  post<T>(endpoint: string, body: unknown): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { method: 'POST', body });
  }
}

// Usage
const api = new ApiClient({ baseURL: 'https://api.example.com' });

interface User {
  id: number;
  name: string;
  email: string;
}

// Type-safe API calls
const response = await api.get<User[]>('/users');
console.log(response.data); // User[]
\`\`\`

## Best Practices

1. **Enable strict mode**
\`\`\`json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true
  }
}
\`\`\`

2. **Avoid any**
\`\`\`typescript
// Bad
function process(data: any) {
  return data.value;
}

// Good
function process<T extends { value: unknown }>(data: T) {
  return data.value;
}
\`\`\`

3. **Use type guards**
\`\`\`typescript
function isUser(obj: unknown): obj is User {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'id' in obj &&
    'name' in obj
  );
}

if (isUser(data)) {
  console.log(data.name); // TypeScript knows it's User
}
\`\`\`

## Conclusion

TypeScript improves code quality, developer experience, and maintainability. Start with basics, practice regularly, and gradually adopt advanced patterns.

---

**About the Author:** Dr. Michael Zhang is a TypeScript team member at Microsoft with a PhD in Programming Languages and 10+ years of experience.`
  },
  {
    id: "5",
    title: "Full Stack Development Roadmap 2025: Complete Career Guide",
    excerpt: "Comprehensive roadmap for becoming a full stack developer in 2025. Covers frontend, backend, databases, DevOps, and career guidance with salary insights for India.",
    author: "Priya Sharma",
    authorBio: "Lead Full Stack Engineer at Flipkart with 14+ years experience. Mentored 200+ developers. Former tech lead at Amazon and Microsoft India.",
    publishDate: new Date("2025-01-16"),
    lastUpdated: new Date("2025-01-16"),
    readTime: "24 min read",
    tags: ["Full Stack", "Career", "Web Development", "Programming", "Tutorial"],
    slug: "full-stack-development-roadmap-2025",
    category: "Career",
    featured: true,
    metaDescription: "Complete full stack development roadmap for 2025. Learn frontend, backend, databases, DevOps with career guidance and salary insights for India.",
    keywords: ["full stack developer", "web development roadmap", "full stack career", "learn full stack", "developer roadmap 2025"],
    imageUrl: "/images/blog/fullstack-roadmap.svg",
    content: `# Full Stack Development Roadmap 2025: Complete Career Guide

Full stack development is one of the most in-demand skills in 2025. This comprehensive guide provides a clear roadmap based on my 14 years of experience and mentoring 200+ developers.

## What is Full Stack Development?

A full stack developer works on both frontend (client-side) and backend (server-side) of applications, plus databases, deployment, and everything in between.

**Key Responsibilities:**
- Build user interfaces
- Develop server-side logic
- Design databases
- Implement APIs
- Deploy and maintain applications
- Ensure security and performance

## The Complete Roadmap

### Phase 1: Foundations (Months 1-3)

**HTML & CSS**
\`\`\`html
<!-- Semantic HTML5 -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Website</title>
</head>
<body>
  <header>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
  </header>
  
  <main>
    <section id="home">
      <h1>Welcome</h1>
      <p>Content here</p>
    </section>
  </main>
  
  <footer>
    <p>&copy; 2025 My Website</p>
  </footer>
</body>
</html>
\`\`\`

\`\`\`css
/* Modern CSS with Flexbox and Grid */
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
}

.card {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
}

/* Responsive design */
@media (max-width: 768px) {
  .container {
    grid-template-columns: 1fr;
  }
}
\`\`\`

**JavaScript Fundamentals**
\`\`\`javascript
// ES6+ features
const numbers = [1, 2, 3, 4, 5];

// Arrow functions
const doubled = numbers.map(n => n * 2);

// Destructuring
const user = { name: 'John', age: 30, email: 'john@example.com' };
const { name, age } = user;

// Spread operator
const newUser = { ...user, city: 'Mumbai' };

// Async/await
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

// Promises
Promise.all([
  fetch('/api/users'),
  fetch('/api/posts')
])
  .then(([users, posts]) => {
    console.log('All data loaded');
  })
  .catch(error => console.error(error));
\`\`\`

### Phase 2: Frontend Development (Months 4-6)

**React.js**
\`\`\`typescript
import { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    fetchUsers();
  }, []);
  
  async function fetchUsers() {
    try {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError('Failed to load users');
    } finally {
      setLoading(false);
    }
  }
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.name} - {user.email}
        </li>
      ))}
    </ul>
  );
}
\`\`\`

**State Management (Zustand)**
\`\`\`typescript
import create from 'zustand';

interface Store {
  users: User[];
  addUser: (user: User) => void;
  removeUser: (id: number) => void;
  fetchUsers: () => Promise<void>;
}

const useStore = create<Store>((set) => ({
  users: [],
  
  addUser: (user) => set((state) => ({
    users: [...state.users, user]
  })),
  
  removeUser: (id) => set((state) => ({
    users: state.users.filter(u => u.id !== id)
  })),
  
  fetchUsers: async () => {
    const response = await fetch('/api/users');
    const users = await response.json();
    set({ users });
  }
}));
\`\`\`

### Phase 3: Backend Development (Months 7-9)

**Node.js & Express**
\`\`\`typescript
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());

// Routes
app.get('/api/users', async (req, res) => {
  try {
    const users = await db.users.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/users', async (req, res) => {
  try {
    const { name, email } = req.body;
    
    // Validation
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email required' });
    }
    
    const user = await db.users.create({ name, email });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user' });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
\`\`\`

**Database (PostgreSQL)**
\`\`\`sql
-- Create users table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create posts table
CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  content TEXT,
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create index for faster queries
CREATE INDEX idx_posts_user_id ON posts(user_id);
CREATE INDEX idx_posts_published ON posts(published);

-- Query with JOIN
SELECT 
  users.name,
  posts.title,
  posts.created_at
FROM users
INNER JOIN posts ON users.id = posts.user_id
WHERE posts.published = true
ORDER BY posts.created_at DESC
LIMIT 10;
\`\`\`

### Phase 4: DevOps & Deployment (Months 10-12)

**Docker**
\`\`\`dockerfile
# Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 3000

CMD ["node", "dist/index.js"]
\`\`\`

\`\`\`yaml
# docker-compose.yml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgresql://user:password@db:5432/myapp
    depends_on:
      - db
  
  db:
    image: postgres:15-alpine
    environment:
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=password
      - POSTGRES_DB=myapp
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
\`\`\`

**CI/CD (GitHub Actions)**
\`\`\`yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm test
      
      - name: Build
        run: npm run build
      
      - name: Deploy to production
        run: |
          echo "Deploying to production..."
          # Add deployment commands
\`\`\`

## Essential Skills Checklist

### Frontend
✅ HTML5 semantic markup
✅ CSS3 (Flexbox, Grid, animations)
✅ JavaScript ES6+
✅ React.js or Vue.js
✅ TypeScript
✅ Responsive design
✅ State management
✅ API integration

### Backend
✅ Node.js & Express
✅ RESTful API design
✅ Authentication (JWT, OAuth)
✅ Database design
✅ SQL & NoSQL
✅ Error handling
✅ Security best practices
✅ Testing (Jest, Supertest)

### DevOps
✅ Git & GitHub
✅ Docker basics
✅ CI/CD pipelines
✅ Cloud platforms (AWS/GCP/Azure)
✅ Linux command line
✅ Nginx/Apache
✅ Monitoring & logging

## Career Path in India

### Entry Level (0-2 years)
**Junior Full Stack Developer**
- Salary: ₹4-8 LPA
- Companies: Startups, service companies
- Focus: Learning, building features

**Skills to develop:**
- Complete CRUD applications
- RESTful APIs
- Database operations
- Git workflow
- Basic deployment

### Mid Level (3-5 years)
**Full Stack Developer**
- Salary: ₹10-20 LPA
- Companies: Product companies, mid-size startups
- Focus: Architecture, mentoring

**Skills to develop:**
- System design
- Performance optimization
- Code review
- Team collaboration
- Project planning

### Senior Level (6-10 years)
**Senior/Lead Full Stack Engineer**
- Salary: ₹25-45 LPA
- Companies: Top product companies, unicorns
- Focus: Technical leadership, strategy

**Skills to develop:**
- Architecture decisions
- Team leadership
- Stakeholder management
- Technical strategy
- Hiring & mentoring

### Expert Level (10+ years)
**Principal Engineer/Architect**
- Salary: ₹50-100+ LPA
- Companies: FAANG, unicorns
- Focus: Organization-wide impact

## Top Companies Hiring in India

**Product Companies:**
- Flipkart, Amazon, Google
- Microsoft, Meta, Apple
- Swiggy, Zomato, Ola
- Paytm, PhonePe, CRED

**Startups:**
- Razorpay, Zerodha
- Freshworks, Zoho
- Postman, Hasura
- Browserstack, Chargebee

**Service Companies:**
- TCS, Infosys, Wipro
- Accenture, Cognizant
- Tech Mahindra, HCL

## Learning Resources

**Free Resources:**
- freeCodeCamp
- The Odin Project
- MDN Web Docs
- YouTube tutorials

**Paid Courses:**
- Udemy (₹500-2000)
- Coursera specializations
- Frontend Masters
- Pluralsight

**Practice Platforms:**
- LeetCode (DSA)
- HackerRank
- CodeWars
- Frontend Mentor

## Building Your Portfolio

**Essential Projects:**

1. **E-commerce Website**
   - Product listing, cart, checkout
   - User authentication
   - Payment integration
   - Admin dashboard

2. **Social Media App**
   - User profiles
   - Posts, likes, comments
   - Real-time updates
   - Image uploads

3. **Task Management Tool**
   - CRUD operations
   - Drag & drop
   - Collaboration features
   - Notifications

4. **Blog Platform**
   - Rich text editor
   - SEO optimization
   - Comments system
   - Analytics

5. **Real-time Chat App**
   - WebSocket integration
   - Group chats
   - File sharing
   - Online status

## Interview Preparation

**Common Questions:**

1. **Technical:**
   - Explain event loop in JavaScript
   - Difference between SQL and NoSQL
   - How does React Virtual DOM work?
   - RESTful API best practices
   - Database normalization

2. **System Design:**
   - Design a URL shortener
   - Design a social media feed
   - Design a file storage system
   - Design a notification system

3. **Coding:**
   - Array/String manipulation
   - Tree/Graph traversal
   - Dynamic programming
   - API implementation

## Tips for Success

1. **Build real projects** - Theory alone isn't enough
2. **Contribute to open source** - Learn from others
3. **Write technical blogs** - Solidify your knowledge
4. **Network actively** - Attend meetups, conferences
5. **Stay updated** - Follow tech blogs, newsletters
6. **Practice DSA** - Essential for interviews
7. **Learn continuously** - Technology evolves rapidly

## Common Mistakes to Avoid

❌ Tutorial hell - watching without building
❌ Ignoring fundamentals - jumping to frameworks
❌ Not writing tests - quality matters
❌ Poor Git practices - commit messages matter
❌ Skipping documentation - code should be readable
❌ Not asking for help - community is valuable
❌ Comparing with others - focus on your journey

## Conclusion

Full stack development is a rewarding career with excellent opportunities in India. Follow this roadmap, build projects, and stay consistent. Success comes with practice and persistence.

Your journey starts today. Pick one technology, master it, then move to the next. Good luck!

---

**About the Author:** Priya Sharma is Lead Full Stack Engineer at Flipkart with 14+ years of experience. She has mentored 200+ developers and worked at Amazon and Microsoft India.`
  }
];
