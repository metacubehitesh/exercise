({
    createContact: function(component, contact) {
        let action = component.get("c.saveContact");
        action.setParams({
            "contact": contact
        });
        action.setCallback(this, function(response){
            let state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.newContact",response.getReturnValue());
                component.set("v.recordId", response.getReturnValue().Id);
                component.set("v.displayFlag",'true');
                component.set("v.displayStatus",'Success');
                component.set("v.displayMessage",'Record Created Successfully.');
            } else {
                component.set("v.displayFlag",'true');
                component.set("v.displayStatus",'Error');
                component.set("v.displayMessage",state);
            }
        });
        $A.enqueueAction(action);
    }
})