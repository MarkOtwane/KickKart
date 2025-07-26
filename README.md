# KickKart 🛒👟

KickKart is a modern full-stack shoe e-commerce web application. Users can browse and buy shoes, manage their cart, sign up and log in, make simulated payments, and receive email confirmations. Admins can manage inventory, view payments, and monitor orders.

---

## 🧰 Tech Stack

-    **Frontend:** Angular
-    **Backend:** NestJS (Node.js)
-    **Database:** PostgreSQL (with Prisma)
-    **Authentication:** JWT (User/Admin Roles)
-    **Mailer:** NestJS MailerModule (Nodemailer)
-    **Payment:** Simulated (can integrate Stripe later)
-    **Deployment:** Vercel (Frontend), Render (Backend)

---

## 📦 Features

### 👥 Users

-    Sign up, log in
-    Browse products
-    View product details
-    Add/remove items from cart
-    Update cart quantities
-    Make simulated payments
-    Receive email confirmation

### 👨‍💼 Admins

-    Add/edit/delete products
-    View all user orders and payments
-    Manage products and inventory

---

## 📁 Project Structure

kickkart/
├── backend/ # NestJS App
│ ├── src/
│ │ ├── auth/
│ │ ├── users/
│ │ ├── products/
│ │ ├── cart/
│ │ ├── orders/
│ │ ├── payments/
│ │ └── mailer/
├── frontend/ # Angular App
│ ├── src/app/
│ │ ├── auth/
│ │ ├── products/
│ │ ├── cart/
│ │ ├── admin/
│ │ ├── user/
│ │ └── shared/
└── README.md

---

## 🚀 Getting Started

### 1. Clone the project

git clone https://github.com/MarkOtwane/KickKart.git
cd kickkart

### 2. Backend Setup (NestJS)

cd backend
cp .env.example .env
npm install
npx prisma migrate dev
npm run start:dev

### 3. Frontend Setup (Angular)

cd ../frontend
npm install
ng serve

---

## 📧 Email Configuration

`backend/.env`
MAIL_HOST=smtp.example.com
MAIL_PORT=587
MAIL_USER=your_email@example.com
MAIL_PASS=your_password

---

## 💳 Simulated Payment

This project includes a placeholder for payment processing. You can later integrate Stripe or PayPal using their SDKs.

---

## 🧪 Testing

-    Backend: `npm run test`
-    Frontend: `ng test`

---

## 🌐 Deployment

-    Frontend: [Vercel](https://vercel.com/docs)
-    Backend: [Render](https://render.com/docs/deploy-node-express-app)
-    Database: [Supabase](https://supabase.com/) or [Railway](https://railway.app/)

---

## 📚 Resources

-    [NestJS Docs](https://docs.nestjs.com/)
-    [Angular Docs](https://angular.io/docs)
-    [Prisma Docs](https://www.prisma.io/docs/)
-    [MailerModule Guide](https://docs.nestjs.com/techniques/mailer)
-    [Render Deployment](https://render.com/docs/deploy-node-express-app)
-    [Vercel Angular Deployment](https://vercel.com/guides/deploying-angular-with-vercel)

---

## 📄 License

MTS © 2025 KickKart
