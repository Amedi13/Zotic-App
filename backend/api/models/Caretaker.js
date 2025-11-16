/**
 * Caretaker Data model
 */

class Caretaker {
    constructor(id, userId, title, bio, years_xp, hourly_rate, city, state, is_activem, createdAt) {
        this.id = id;
        this.userId = userId;
        this.title = title;
        this.bio = bio;
        this.years_xp = years_xp;
        this.hourly_rate = hourly_rate;
        this.city = city;
        this.state = state;
        this.is_active = is_activem;
        this.createdAt = createdAt;
    }
}