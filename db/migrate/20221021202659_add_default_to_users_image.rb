class AddDefaultToUsersImage < ActiveRecord::Migration[7.0]
  def change
    change_column_default :users, :image, 'https://images.rawpixel.com/image_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjkzNy1hZXctMTExXzMuanBn.jpg'
  end
end
