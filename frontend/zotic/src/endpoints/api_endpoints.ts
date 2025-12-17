// api uyl 
const app  = 'http://localhost:5000/api/auth';

export const REGISTER_API = `${app}/register`;
export const GET_USER_API = `${app}/user`;
export const LOGIN_API = `${app}/login`;

interface userData {
    firstname: string;
    lastname: string;
    username: string;
    dob: string;
    email: string;
    password: string;
}

/**
 * Register API endpoint
 */
export async function registerUser(data: userData) {
     const response = await fetch(REGISTER_API, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
   
     if (!response.ok) {
        // Try to parse error message, but handle cases where response isn't JSON
        let errorMessage = 'Failed to register user';
        try {
            const result = await response.json();
            errorMessage = result.message || errorMessage;
        } catch {
            // If JSON parsing fails, use default message
        }
        throw new Error(errorMessage);
    }

    return await response.json();
}

export default registerUser;

/**
 * Get User API endpoint
 */
export async function getUser(userId: string) {
    const response = await fetch(`${GET_USER_API}/${userId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        // Try to parse error message, but handle cases where response isn't JSON
        let errorMessage = 'Failed to get users' 
        try{
            const result = await response.json();
            errorMessage = result.message || errorMessage;
        }catch{
            // If JSON parsing fails, use default message
        }
        throw new Error(errorMessage);
    }
    return await response.json();
} 

export async function loginUser(email: String) {
    const response = await fetch(`${LOGIN_API}/${email}`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    //validate the response
    if (!response.ok) {
        let errorMessage = 'Failed to login the user'
        try{
            const result = await response.json()
            errorMessage = result.message || errorMessage
        } catch (error) {

        }
        throw new Error(errorMessage);
    }
    
    return await response.json()
}