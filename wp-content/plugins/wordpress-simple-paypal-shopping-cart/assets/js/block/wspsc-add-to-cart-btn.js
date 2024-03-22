/**
 * Add to Cart Button block.
 *
 * @package wordpress-simple-paypal-shopping-cart
 */

wspsc_register_block_type(
    wspsc_cb_block_block_meta.name,
    {
        title: wspsc_cb_block_block_meta.title,
        description: wspsc_cb_block_block_meta.description,
        icon: 'cart',
        category: 'common',

        edit: function (props) {

            return [
                wspsc_element(
                    wspsc_serverSideRender,
                    {
                        key: "wspsc-add-to-cart-block-serverSideRender-key", // unique key.
                        block: wspsc_cb_block_block_meta.name,
                        attributes: props.attributes,
                    }
                ),

                wspsc_element(
                    wspsc_inspector_controls,
                    {
                        key: "wspsc-add-to-cart-block-inspector-controls-key", // unique key.
                    },
                    wspsc_element(
                        wspsc_panel,
                        {
                            key: "wspsc-add-to-cart-block-panel-key", // unique key.
                        },
                        [
                            // * PANELS goes here.
                            wspsc_element(
                                wspsc_panel_body,
                                {
                                    key: "wspsc-add-to-cart-block-panel-body-general-key", // unique key.
                                    title: wspsc_cb_block_attrs_meta['general'].title,
                                    initialOpen: wspsc_cb_block_attrs_meta['general'].initialOpen,
                                    scrollAfterOpen: wspsc_cb_block_attrs_meta['general'].scrollAfterOpen,
                                },
                                [
                                    wspsc_element(
                                        'p',
                                        {
                                            key: "wspsc-add-to-cart-block-p-general-key", // unique key.
                                            className: 'wspsc_block_description_text'
                                        },
                                        wspsc_cb_block_attrs_meta['general'].description
                                    ),
                                    wspsc_element(
                                        'div',
                                        {
                                            key: "wspsc-add-to-cart-block-div-general-key", // unique key.
                                        },
                                        [
                                            // * Fields goes here.
                                            wspsc_element(
                                                wspsc_text_control,
                                                {
                                                    key: "wspsc-add-to-cart-block-text-control-general-name-key", // unique key.
                                                    label: wspsc_cb_block_attrs_meta['general']['fields']['name'].label,
                                                    help: wspsc_cb_block_attrs_meta['general']['fields']['name'].description,
                                                    value: props.attributes['name'],
                                                    onChange: (value) => {
                                                        let prop_attrs = {};
                                                        prop_attrs['name'] = value;
                                                        props.setAttributes(prop_attrs);
                                                    },
                                                }
                                            ),
                                            wspsc_element(
                                                wspsc_text_control,
                                                {
                                                    key: "wspsc-add-to-cart-block-text-control-general-price-key", // unique key.
                                                    label: wspsc_cb_block_attrs_meta['general']['fields']['price'].label,
                                                    help: wspsc_cb_block_attrs_meta['general']['fields']['price'].description,
                                                    value: props.attributes['price'],
                                                    onChange: (value) => {
                                                        let prop_attrs = {};
                                                        prop_attrs['price'] = value;
                                                        props.setAttributes(prop_attrs);
                                                    },
                                                }
                                            ),
                                            wspsc_element(
                                                wspsc_text_control,
                                                {
                                                    key: "wspsc-add-to-cart-block-text-control-general-shipping-key", // unique key.
                                                    label: wspsc_cb_block_attrs_meta['general']['fields']['shipping'].label,
                                                    help: wspsc_cb_block_attrs_meta['general']['fields']['shipping'].description,
                                                    value: props.attributes['shipping'],
                                                    onChange: (value) => {
                                                        let prop_attrs = {};
                                                        prop_attrs['shipping'] = value;
                                                        props.setAttributes(prop_attrs);
                                                    },
                                                }
                                            ),
                                            wspsc_element(
                                                wspsc_text_control,
                                                {
                                                    key: "wspsc-add-to-cart-block-text-control-general-button_text-key", // unique key.
                                                    label: wspsc_cb_block_attrs_meta['general']['fields']['button_text'].label,
                                                    help: wspsc_cb_block_attrs_meta['general']['fields']['button_text'].description,
                                                    value: props.attributes['button_text'],
                                                    onChange: (value) => {
                                                        let prop_attrs = {};
                                                        prop_attrs['button_text'] = value;
                                                        props.setAttributes(prop_attrs);
                                                    },
                                                }
                                            ),
                                            wspsc_element(
                                                wspsc_text_control,
                                                {
                                                    key: "wspsc-add-to-cart-block-text-control-general-button_image-key", // unique key.
                                                    label: wspsc_cb_block_attrs_meta['general']['fields']['button_image'].label,
                                                    help: wspsc_cb_block_attrs_meta['general']['fields']['button_image'].description,
                                                    value: props.attributes['button_image'],
                                                    onChange: (value) => {
                                                        let prop_attrs = {};
                                                        prop_attrs['button_image'] = value;
                                                        props.setAttributes(prop_attrs);
                                                    },
                                                }
                                            ),
                                            wspsc_element(
                                                wspsc_text_control,
                                                {
                                                    key: "wspsc-add-to-cart-block-text-control-general-file_url-key", // unique key.
                                                    label: wspsc_cb_block_attrs_meta['general']['fields']['file_url'].label,
                                                    help: wspsc_cb_block_attrs_meta['general']['fields']['file_url'].description,
                                                    value: props.attributes['file_url'],
                                                    onChange: (value) => {
                                                        let prop_attrs = {};
                                                        prop_attrs['file_url'] = value;
                                                        props.setAttributes(prop_attrs);
                                                    },
                                                }
                                            ),
                                            wspsc_element(
                                                wspsc_checkbox_control,
                                                {
                                                    key: "wspsc-add-to-cart-block-text-control-general-digital-key", // unique key.
                                                    label: wspsc_cb_block_attrs_meta['general']['fields']['digital'].label,
                                                    help: wspsc_cb_block_attrs_meta['general']['fields']['digital'].description,
                                                    checked: props.attributes['digital'],
                                                    onChange: (value) => {
                                                        let prop_attrs = {};
                                                        prop_attrs['digital'] = value;
                                                        props.setAttributes(prop_attrs);
                                                    },
                                                }
                                            ),
                                        ]
                                    )
                                ]
                            ),
                            wspsc_element(
                                wspsc_panel_body,
                                {
                                    key: "wspsc-add-to-cart-block-panel-body-variation-key", // unique key.
                                    title: wspsc_cb_block_attrs_meta['variation'].title,
                                    initialOpen: wspsc_cb_block_attrs_meta['variation'].initialOpen,
                                    scrollAfterOpen: wspsc_cb_block_attrs_meta['variation'].scrollAfterOpen,
                                },
                                [
                                    wspsc_element(
                                        'p',
                                        {
                                            key: "wspsc-add-to-cart-block-p-variation-key", // unique key.
                                            className: 'wspsc_block_description_text'
                                        },
                                        wspsc_cb_block_attrs_meta['variation'].description
                                    ),
                                    wspsc_element(
                                        'div',
                                        {
                                            key: "wspsc-add-to-cart-block-div-variation-key", // unique key.
                                        },
                                        [
                                            // * Fields goes here.
                                            wspsc_element(
                                                wspsc_text_control,
                                                {
                                                    key: "wspsc-add-to-cart-block-text-control-variation-var1-key", // unique key.
                                                    label: wspsc_cb_block_attrs_meta['variation']['fields']['var1'].label,
                                                    help: wspsc_cb_block_attrs_meta['variation']['fields']['var1'].description,
                                                    value: props.attributes['var1'],
                                                    onChange: (value) => {
                                                        let prop_attrs = {};
                                                        prop_attrs['var1'] = value;
                                                        props.setAttributes(prop_attrs);
                                                    },
                                                }
                                            ),
                                            wspsc_element(
                                                wspsc_text_control,
                                                {
                                                    key: "wspsc-add-to-cart-block-text-control-variation-var2-key", // unique key.
                                                    label: wspsc_cb_block_attrs_meta['variation']['fields']['var2'].label,
                                                    help: wspsc_cb_block_attrs_meta['variation']['fields']['var2'].description,
                                                    value: props.attributes['var2'],
                                                    onChange: (value) => {
                                                        let prop_attrs = {};
                                                        prop_attrs['var2'] = value;
                                                        props.setAttributes(prop_attrs);
                                                    },
                                                }
                                            ),
                                            wspsc_element(
                                                wspsc_text_control,
                                                {
                                                    key: "wspsc-add-to-cart-block-text-control-variation-var3-key", // unique key.
                                                    label: wspsc_cb_block_attrs_meta['variation']['fields']['var3'].label,
                                                    help: wspsc_cb_block_attrs_meta['variation']['fields']['var3'].description,
                                                    value: props.attributes['var3'],
                                                    onChange: (value) => {
                                                        let prop_attrs = {};
                                                        prop_attrs['var3'] = value;
                                                        props.setAttributes(prop_attrs);
                                                    },
                                                }
                                            )
                                        ]
                                    )
                                ]
                            )
                        ]
                    ),
                ),
            ];
        },

        save: function () {
            return null;
        },
    }
);

/*
* The 'ReadForm' function is called when the cart button is interacted.
* So defining an empty function prevents javascript actions from being failed in the editor screen.
*/
function ReadForm(){
    // do nothing.
}
