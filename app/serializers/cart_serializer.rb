class CartSerializer < ActiveModel::Serializer
  attributes :id, :name, :street, :avenue, :landmarks, :accepts_card, :approximate_hours, :chicken_over_rice, :combo_over_rice
end
