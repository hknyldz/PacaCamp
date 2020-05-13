class Api::SpotsController < ApplicationController
    def index 
        if params[:bounds]
            @spots = Spot.all.includes(:area, :essential, :amenity, :detail).with_attached_photos.select { |spot| spot.in_bounds(params[:bounds]) }
        else 
            @spots = Spot.all.includes(:area, :essential, :amenity, :detail).with_attached_photos
        end 
    end

    def show
        @spot = Spot.includes(:area, :essential, :amenity, :detail).with_attached_photos.find(params[:id])
    end 
end
