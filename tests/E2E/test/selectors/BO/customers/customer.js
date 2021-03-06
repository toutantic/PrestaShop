module.exports = {
  Customer: {
    customer_menu: '//*[@id="subtab-AdminParentCustomer"]/a',
    customers_subtab: '//*[@id="subtab-AdminCustomers"]/a',
    new_customer_button: '//*[@id="page-header-desc-configuration-add"]',
    social_title_button: '//*[@id="customer_gender_id_0"]',
    first_name_input: '//*[@id="customer_first_name"]',
    last_name_input: '//*[@id="customer_last_name"]',
    email_address_input: '//*[@id="customer_email"]',
    password_input: '//*[@id="customer_password"]',
    days_select: '//*[@id="customer_birthday_day"]',
    month_select: '//*[@id="customer_birthday_month"]',
    years_select: '//*[@id="customere_birthday_year"]',
    save_button: '//*[@id="main-div"]//button[contains(text(),"Save")]',
    customer_filter_by_email_input: '//*[@id="form-customer"]//input[@name="customerFilter_email"]',
    email_address_value: '//*[@id="form-customer"]//td[%ID]',
    reset_button: '//*[@id="table-customer"]//button[@name="submitResetcustomer"]',
    edit_button: '//*[@id="form-customer"]//a[@title="Edit"]',
    dropdown_toggle: '//*[@id="form-customer"]//button[@data-toggle="dropdown"]',
    delete_button: '//*[@id="form-customer"]//a[@title="Delete"]',
    delete_first_option: '//*[@id="deleteMode_real"]',
    delete_second_option: '//*[@id="deleteMode_deleted"]',
    delete_confirmation_button: '//*[@id="content"]//input[@value="Delete"]',
    select_customer: '//*[@id="form-customer"]//input[@name="customerBox[]"]',
    bulk_actions_button: '//*[@id="bulk_action_menu_customer"]',
    bulk_actions_delete_button: '//*[@id="form-customer"]//div[contains(@class,"bulk-actions")]//a[contains(@onclick,"submitBulkdeletecustomer")]',
    empty_list_icon: '//*[@id="table-customer"]//div[contains(@class,"list-empty-msg")]',
    customer_link: '//*[@id="table-address"]//td[contains(text(),"%ID")]',
    Partner_offers: '//label[contains(@for,"customer_is_partner_offers_subscribed_1")]',
    first_name_value:'//*[@id="table-customer"]//tr[%ID]/td[4]',
    last_name_value:'//*[@id="table-customer"]//tr[%ID]/td[5]',
    view_button: '//*[@id="form-customer"]//a[@title="View"]',
    valid_orders: '//*[@id="container-customer"]//div[contains(@class,"panel")]//i/../span[contains(@class,"label-success")]',
    total_amount: '//*[@id="container-customer"]//div[contains(@class,"panel")]//i[contains(@class,"icon-ok-circle icon-big")]/..',
  }
};
