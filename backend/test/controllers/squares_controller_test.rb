require 'test_helper'

class SquaresControllerTest < ActionDispatch::IntegrationTest
  setup do
    @square = squares(:one)
  end

  test "should get index" do
    get squares_url, as: :json
    assert_response :success
  end

  test "should create square" do
    assert_difference('Square.count') do
      post squares_url, params: { square: { corner_value: @square.corner_value, crossword_id: @square.crossword_id, is_black: @square.is_black, letter: @square.letter, x: @square.x, y: @square.y } }, as: :json
    end

    assert_response 201
  end

  test "should show square" do
    get square_url(@square), as: :json
    assert_response :success
  end

  test "should update square" do
    patch square_url(@square), params: { square: { corner_value: @square.corner_value, crossword_id: @square.crossword_id, is_black: @square.is_black, letter: @square.letter, x: @square.x, y: @square.y } }, as: :json
    assert_response 200
  end

  test "should destroy square" do
    assert_difference('Square.count', -1) do
      delete square_url(@square), as: :json
    end

    assert_response 204
  end
end
