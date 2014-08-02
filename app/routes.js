module.exports = function(match) {
  match('',                         'home#index');
  match('users/create',             'users#create');
  match('users',                    'users#index');
  match('users/:page',              'users#index');
//  match('users/edit/:id',           'users#edit');
//  match('users/remove/:id',         'users#remove');
};
