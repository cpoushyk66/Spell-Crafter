class SpellBooksController < ApplicationController

    before_action :set_spell_book, only: [:show, :update, :destroy]
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    def index
        render json: SpellBook.all, status: :ok
    end

    def show
        render json: @spell_book, status: :ok
    end

    def create
        spell_book = SpellBook.create!(spell_book_params,)
        render json: spell_book, status: :created
    end

    def update
        @spell_book.update!(spell_book_params)
        render json: @spell_book, status: :accepted
    end

    def destroy
        @spell_book.destroy
        head :no_content
    end

    private

    def set_spell_book
        @spell_book = SpellBook.find(params[:id])
    end

    def spell_book_params
        params.permit(:name, :description, :user_id)
    end

    def render_not_found_response
        render json: {error: "User not found"}, status: :not_found
    end

    def render_unprocessable_entity(invalid)
        render json: {error: invalid.record.errors}, status: :unprocessable_entity
    end

end
