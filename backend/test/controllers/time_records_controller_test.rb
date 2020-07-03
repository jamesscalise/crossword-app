require 'test_helper'

class TimeRecordsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @time_record = time_records(:one)
  end

  test "should get index" do
    get time_records_url, as: :json
    assert_response :success
  end

  test "should create time_record" do
    assert_difference('TimeRecord.count') do
      post time_records_url, params: { time_record: { crossword_id: @time_record.crossword_id, record: @time_record.record, user_id: @time_record.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show time_record" do
    get time_record_url(@time_record), as: :json
    assert_response :success
  end

  test "should update time_record" do
    patch time_record_url(@time_record), params: { time_record: { crossword_id: @time_record.crossword_id, record: @time_record.record, user_id: @time_record.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy time_record" do
    assert_difference('TimeRecord.count', -1) do
      delete time_record_url(@time_record), as: :json
    end

    assert_response 204
  end
end
