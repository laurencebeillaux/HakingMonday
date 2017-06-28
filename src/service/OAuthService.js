export const OAuth = () => {
    return new Promise((resolve, reject)=> {
        Trello.authorize({
            type: 'popup',
            name: 'Getting Started Application',
            scope: {
                read: 'true',
                write: 'true'
            },
            expiration: 'never',
            success: resolve,
            error: reject
        });
    }).then(()=> Trello.members.get('me'))
};