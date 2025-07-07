# Authentication System

A simple authentication system with Next.js, TypeScript, and SCSS modules.

## Features

- User login with phone number validation
- Dashboard with user information
- Two form implementations:
  - Using Formik and Yup for validation
  - Using custom React hooks for validation
- Responsive design using SCSS modules
- Authentication state management using Context API

## Technologies Used

- Next.js (App Router)
- TypeScript
- SCSS Modules with nesting support
- Formik and Yup for form validation
- React Context API for state management

## Getting Started

### Prerequisites

- Node.js (version 18 or later)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/mahdisarrafzadeh/auth.git
cd auth
```

2. Install dependencies

```bash
npm install
```

3. Run the development server

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
auth/
├── app/
│   ├── api.json               # Sample API response
│   ├── auth/                  # Auth page
│   │   └── page.tsx
|   ├── services/
│   │   └──api/
|   ├── providers/
│   ├── components/            # Reusable components
|   │   ├──ui
│   │   │   ├── Button/
│   │   │   ├── Input/
│   │   │   └── Tooltip/
│   │   ├── Login.tsx
│   │   ├── LoginForm/
│   │   └── Dashboard.tsx
│   ├── context/               # Authentication context
│   ├── dashboard/             # Dashboard page
│   │   └── page.tsx           # Custom hooks
│   ├── styles/                # Global styles
│   │   ├── mixins.scss
│   │   └── variables.scss
│   └── types/
├── hooks/
└── constants/                  # App constants
```

## Features

1. Auth Page:

   - Input field for Iranian phone number with validation
   - Login button that makes an API call to get user data
   - Stores user data in localStorage
   - Redirects to dashboard after successful login

2. Dashboard Page:
   - Shows a welcome message with user information
   - Redirects to auth page if not logged in
   - Logout button to clear session

## Best Practices Used

- Component-based architecture
- Custom hooks for logic separation
- Context API for global state management
- Responsive design with rem units
- Form validation with both libraries and custom code
- Memory leak prevention with proper useEffect cleanup
- Type safety with TypeScript

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
