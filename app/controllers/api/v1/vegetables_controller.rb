class Api::V1::VegetablesController < ApplicationController
  def index
    vegetables = Vegetable.all
    render json: vegetables
  end
end
