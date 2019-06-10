class Api::ItemsController < ApplicationController
before_action :set_menu
before_action :set_item, only: [:update, :destroy]

  def index
    render json: @menu.items
  end

  def create
  end

  def update
  end

  def destroy
    @item.destroy
    render json: { message: "Item deleted"}
  end

  private
  def item_params
    params.require(:item).permit(:name)
  end

  def set_item
    @item = Item.find(params[:id])
  end

  def set_menu
    @menu = Menu.find(params[:menu_id])
  end


end
