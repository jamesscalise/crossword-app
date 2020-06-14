require 'test_helper'

class CluesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @clue = clues(:one)
  end

  test "should get index" do
    get clues_url, as: :json
    assert_response :success
  end

  test "should create clue" do
    assert_difference('Clue.count') do
      post clues_url, params: { clue: { content: @clue.content, crossword_id: @clue.crossword_id, number: @clue.number, orientation: @clue.orientation } }, as: :json
    end

    assert_response 201
  end

  test "should show clue" do
    get clue_url(@clue), as: :json
    assert_response :success
  end

  test "should update clue" do
    patch clue_url(@clue), params: { clue: { content: @clue.content, crossword_id: @clue.crossword_id, number: @clue.number, orientation: @clue.orientation } }, as: :json
    assert_response 200
  end

  test "should destroy clue" do
    assert_difference('Clue.count', -1) do
      delete clue_url(@clue), as: :json
    end

    assert_response 204
  end
end
