class Api::SpotsController < ApplicationController
    def index 
        @spots = Spot.all.includes(:area, :essential, :amenity, :detail)
    end

    def show
        @spot = Spot.includes(:area, :essential, :amenity, :detail).find(params[:id])
    end 
end
