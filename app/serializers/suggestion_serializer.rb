class SuggestionSerializer < ActiveModel::Serializer
  attributes :id, :name, :street, :avenue, :landmarks, :accepts_card, :chicken_over_rice, :combo_over_rice, :latitude, :longitude, :image, :opening_hours, :closing_hours, :opening_am_pm, :closing_am_pm
end
