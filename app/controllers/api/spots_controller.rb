class Api::SpotsController < ApplicationController
    def index 
        @spots = Spot.all.includes(:area, :essential, :amenity, :detail).with_attached_photos
    end

    def show
        @spot = Spot.includes(:area, :essential, :amenity, :detail).with_attached_photos.find(params[:id])
    end 
end
