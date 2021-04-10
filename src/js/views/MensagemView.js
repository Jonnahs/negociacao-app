class MensagemView extends View {
    template(model) {
        return `<p class="alert alert-info alert-dismissible">${model}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        </p>
        `;
    }
}
