json.partial! 'api/users/user', user: @user
json.member_since @user.created_at