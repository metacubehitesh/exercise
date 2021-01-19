({
    clickCreateContact : function(component, event, helper) {
        helper.createContact(component, component.get("v.newContact"));
        helper.getContactList(component);
        component.set("v.newContact",{'sobjectType': 'Contact',
                             'firstname': '',
                             'lastname': '',
                             'email': '',
                             'phone': '',
                             'fax': ''});
    },
    closePromt : function(component, event, helper) {
        component.set("v.displayFlag",'false');
        component.set("v.displayStatus",'');
        component.set("v.displayMessage",'');
    },
    doInit  : function(component, event, helper) {
        helper.getContactList(component);
    }
})