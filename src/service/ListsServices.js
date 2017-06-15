const urlBoard = 'https://api.trello.com/1/boards/XHH4MyVm?lists=open&list_fields=name&fields=name,desc&cards=open&fields=name,idList,url';

class ListServices {
    fetchUrl() {
        return fetch(urlBoard)
            .then(
                (resp) => resp.json()
            )
    }
}

export const listServices = new ListServices();