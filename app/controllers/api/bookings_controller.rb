class Api::BookingsController < ApplicationController

    def index
        @bookings = Booking.where(guest_id: params[:user_id])

        if @bookings.length > 0
            render :index
        else 
            render json: {}
        end 
    end

    def create
        @booking = Booking.new(booking_params)
        if @booking.save
            render :show
        else 
            render json: @booking.errors.full_messages, status: 400
        end 
    end 

    def destroy
        @booking = Booking.find(params[:id])

        if @booking.destroy
            render :show
        else 
            render json: @booking.errors.full_messages, status: 400
        end 
    end 

    private
    def booking_params
        params.require(:booking).permit(
            :guest_id, 
            :spot_id, 
            :num_guests, 
            :checkin_date, 
            :checkout_date, 
            :total
        )
    end 
end
