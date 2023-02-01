class SuggestionSerializer < ActiveModel::Serializer
  attributes :id, :name, :street, :avenue, :landmarks, :accepts_card, :chicken_over_rice, :combo_over_rice, :latitude, :longitude, :image, :opening_hours, :closing_hours, :opening_am_pm, :closing_am_pm, :user_name, :created_at, :user_id

  def user_name
    object.user.name
  end

  def created_at
    object.created_at.strftime("%b %-d %Y")
  end

end
