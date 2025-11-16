/**
 * Bookings Data Model
 */

class Bookings {
    constructor(id, owner_id, pet_id, start_time, end_time, total_price, status, createdAt){
        this.id = id;
        this.owner_id = owner_id;
        this.pet_id = pet_id;
        this.start_time = start_time;
        this.end_time = end_time;
        this.total_price = total_price;
        this.status = status;
        this.createdAt = createdAt;
    }
}