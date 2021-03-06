class Api::PhysiciansController < ApplicationController
  before_action :set_physician, only: [:show, :destroy, :update]

  def index
    physicians = Physician.all 
    render json: physicians
  end

  def show
    render json: @physician
  end

  def create
    @physician = Physician.new(physician_params)

    if @physician.save
      render json: @physician
    else
      render json: {error: @physician.errors}, status: 422
    end
  end

  def destroy
    @physician.destroy
    render json: @physician
  end


  private
  def set_physician
    @physician = Physician.find(params[:id])
  end

  def physician_params
    params.require(:physician).permit(:name)
  end


end
