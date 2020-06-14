class CluesController < ApplicationController
  before_action :set_clue, only: [:show, :update, :destroy]

  # GET /clues
  def index
    @clues = Clue.all

    render json: @clues
  end

  # GET /clues/1
  def show
    render json: @clue
  end

  # POST /clues
  def create
    @clue = Clue.new(clue_params)

    if @clue.save
      render json: @clue, status: :created, location: @clue
    else
      render json: @clue.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /clues/1
  def update
    if @clue.update(clue_params)
      render json: @clue
    else
      render json: @clue.errors, status: :unprocessable_entity
    end
  end

  # DELETE /clues/1
  def destroy
    @clue.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_clue
      @clue = Clue.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def clue_params
      params.require(:clue).permit(:orientation, :content, :number, :crossword_id)
    end
end
