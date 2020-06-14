require 'test_helper'

class CrosswordsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @crossword = crosswords(:one)
  end

  test "should get index" do
    get crosswords_url, as: :json
    assert_response :success
  end

  test "should create crossword" do
    assert_difference('Crossword.count') do
      post crosswords_url, params: { crossword: { length: @crossword.length, title: @crossword.title } }, as: :json
    end

    assert_response 201
  end

  test "should show crossword" do
    get crossword_url(@crossword), as: :json
    assert_response :success
  end

  test "should update crossword" do
    patch crossword_url(@crossword), params: { crossword: { length: @crossword.length, title: @crossword.title } }, as: :json
    assert_response 200
  end

  test "should destroy crossword" do
    assert_difference('Crossword.count', -1) do
      delete crossword_url(@crossword), as: :json
    end

    assert_response 204
  end
end
