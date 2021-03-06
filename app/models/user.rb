class User < ApplicationRecord
 
    validates :email, :first_name, :last_name, :password_digest, :session_token, presence: true
    validates :email, :session_token, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    after_initialize :ensure_session_token

    has_many :spots,
    foreign_key: :host_id,
    class_name: :Spot,
    dependent: :destroy
    
    has_many :written_reviews,
    foreign_key: :author_id,
    class_name: :Review

    has_many :bookings,
    foreign_key: :guest_id,
    class_name: :Booking,
    dependent: :destroy

    has_many :guests,
    through: :bookings

    attr_reader :password

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user
        user.is_password?(password) ? user : nil
    end 
        
    def reset_session_token! 
        self.generate_session_token
        self.save!
        self.session_token
    end 
     
    def ensure_session_token
        self.generate_session_token unless self.session_token
    end 

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password) 
    end 

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end 

    def generate_session_token
        self.session_token = SecureRandom::urlsafe_base64
        while User.find_by(session_token: self.session_token)
            self.session_token = SecureRandom::urlsafe_base64
        end
        self.session_token
    end
end

