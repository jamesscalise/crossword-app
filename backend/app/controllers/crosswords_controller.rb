class CrosswordsController < ApplicationController
  before_action :set_crossword, only: [:show, :update, :destroy]

  # GET /crosswords
  def index
    @crosswords = Crossword.all

    render json: CrosswordSerializer.new(@crosswords)
  end

  # GET /crosswords/1
  def show
    render json: CrosswordSerializer.new(@crossword)
  end

  # POST /crosswords
  def create
    @crossword = Crossword.new(crossword_params)

    if @crossword.save
      render json: @crossword, status: :created, location: @crossword
    else
      render json: @crossword.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /crosswords/1
  def update
    if @crossword.update(crossword_params)
      render json: @crossword
    else
      render json: @crossword.errors, status: :unprocessable_entity
    end
  end

  # DELETE /crosswords/1
  def destroy
    @crossword.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_crossword
      @crossword = Crossword.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def crossword_params
      params.require(:crossword).permit(:title, :length)
    end
end
