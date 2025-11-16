🐾 Zotic — Exotic Pet Caretaker Platform

Zotic is a platform designed for exotic animal owners who need reliable caretaking support. Not every sitter knows how to handle reptiles, birds, amphibians, or other non-traditional pets, so Zotic helps bridge that gap by connecting owners with caretakers experienced in exotic animal care.

With Zotic, users can:

Create a caretaker profile to offer their services, list species experience, and set availability.

Search for caretakers based on location, specialization, and experience level.

Request and manage bookings, keeping track of upcoming care sessions and communication.

Zotic aims to make exotic pet care less stressful by ensuring the right knowledge meets the right animal.

*Tech Stack* 

--Frontend--
* React
* Vite

--Backend-- 
* Express js

*Project Strcuture* 

backend/
│
├── api/
│   ├── controllers/
│   │   ├── authController.js          # Handles login, signup, authentication logic
│   │   ├── userController.js          # Handles CRUD operations for users
│   │   ├── caretakerController.js     # Handles caretaker profile & specialties
│   │   ├── bookingController.js       # Handles bookings and appointments
│   │   ├── petController.js           # Handles pet data management
│   │   └── reviewController.js        # Handles reviews and ratings
│   │
│   ├── models/
│   │   ├── User.js                    # User schema
│   │   ├── Caretaker.js               # Caretaker schema
│   │   ├── Caretaker_Specialty.js     # Caretaker specialties schema
│   │   ├── Pets.js                    # Pets schema
│   │   ├── Bookings.js                # Booking schema
│   │   └── Reviews.js                 # Review schema
│   │
│   ├── routes/
│   │   ├── authRoutes.js              # /api/auth endpoints
│   │   ├── userRoutes.js              # /api/users endpoints
│   │   ├── caretakerRoutes.js         # /api/caretakers endpoints
│   │   ├── bookingRoutes.js           # /api/bookings endpoints
│   │   ├── petRoutes.js               # /api/pets endpoints
│   │   └── reviewRoutes.js            # /api/reviews endpoints
│   │
│   ├── middleware/
│   │   ├── authMiddleware.js          # Protect routes, verify JWT
│   │   └── errorHandler.js            # Centralized error handling
│   │
│   ├── config/
│   │   ├── db.js                      # MongoDB connection setup
│   │   └── cloudConfig.js             # (Optional) Cloud storage setup, e.g., AWS or Cloudinary
│   │
│   ├── utils/
│   │   ├── sendEmail.js               # Email sending utilities
│   │   ├── generateToken.js           # JWT generation helper
│   │   └── validators.js              # Input validation logic
│   │
│   ├── test/
│   │   └── api.test.js                # Unit/integration tests
│   │
│   ├── .env                           # Environment variables (DB, PORT, JWT_SECRET)
│   ├── index.js                       # Entry point – connects DB, initializes Express app
│   ├── package.json
│   ├── package-lock.json
│   └── README.md
│
└── test.js                            # Temporary testing file (can be moved into /test)
