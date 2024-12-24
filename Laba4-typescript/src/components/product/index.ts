export class ProductComponent {
    private parent: HTMLElement;

    constructor(parent: HTMLElement) {
        this.parent = parent;
    }

    private getHTML(data: { chat_settings: { title: string; members_count: number }; last_message_id: number }): string {
        return `
            <div class="card mb-3" style="width: 540px;">
                <div class="row g-0">
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${data.chat_settings.title}</h5>
                            <h5 class="card-title">Число участников: ${data.chat_settings.members_count}</h5>
                            <h5 class="card-title">ID последнего сообщения: ${data.last_message_id}</h5>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    public render(data: { chat_settings: { title: string; members_count: number }; last_message_id: number }): void {
        const html = this.getHTML(data);
        this.parent.insertAdjacentHTML('beforeend', html);
    }
}