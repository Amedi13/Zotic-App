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
```
backend/
│
├── api/
│   ├── controllers/
│   │   ├── authController.js         
│   │   ├── userController.js         
│   │   ├── caretakerController.js     
│   │   ├── bookingController.js       
│   │   ├── petController.js           
│   │   └── reviewController.js        
│   ├── models/
│   │   ├── User.js                    
│   │   ├── Caretaker_Specialty.js    
│   │   ├── Pets.js                   
│   │   ├── Bookings.js                
│   │   └── Reviews.js               
│   │
│   ├── routes/
│   │   ├── authRoutes.js           
│   │   ├── userRoutes.js           
│   │   ├── caretakerRoutes.js       
│   │   ├── bookingRoutes.js          
│   │   ├── petRoutes.js             
│   │   └── reviewRoutes.js           
│   │
│   ├── middleware/
│   │   ├── authMiddleware.js         
│   │   └── errorHandler.js         
│   │
│   ├── config/
│   │   ├── db.js                 
│   │   └── cloudConfig.js           
│   │
│   ├── utils/
│   │   ├── sendEmail.js            
│   │   ├── generateToken.js        
│   │   └── validators.js              
│   │
│   ├── test/
│   │   └── api.test.js           
│   │                   
│   ├── index.js                     
│   ├── package.json
│   ├── package-lock.json
│   └── README.md
```
*How to run the Application* 
- Start the Backend Development server run the following command `npm run dev`