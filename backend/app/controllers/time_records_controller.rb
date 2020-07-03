class TimeRecordsController < ApplicationController
  before_action :set_time_record, only: [:show, :update, :destroy]

  # GET /time_records
  def index
    @time_records = TimeRecord.all

    render json: @time_records
  end

  # GET /time_records/1
  def show
    render json: @time_record
  end

  # POST /time_records
  def create
    @time_record = TimeRecord.new(time_record_params)

    if @time_record.save
      render json: @time_record, status: :created, location: @time_record
    else
      render json: @time_record.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /time_records/1
  def update
    if @time_record.update(time_record_params)
      render json: @time_record
    else
      render json: @time_record.errors, status: :unprocessable_entity
    end
  end

  # DELETE /time_records/1
  def destroy
    @time_record.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_time_record
      @time_record = TimeRecord.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def time_record_params
      params.require(:time_record).permit(:user_id, :crossword_id, :record)
    end
end
