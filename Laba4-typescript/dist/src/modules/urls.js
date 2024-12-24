import { accessToken, version } from "./consts.js";
class Urls {
    constructor() {
        this.url = 'https://api.vk.com/method';
        this.commonInfo = `access_token=${accessToken}&v=${version}`;
        this.peerId = window.peerId;
    }
    getUserInfo(userId) {
        return `${this.url}/users.get?user_ids=${userId}&fields=photo_400_orig&${this.commonInfo}`;
    }
    getGroupMembers(groupId) {
        return `${this.url}/groups.getMembers?group_id=${groupId}&fields=photo_400_orig&${this.commonInfo}`;
    }
    getConversations(groupId) {
        return `${this.url}/messages.getConversations?group_id=${groupId}&filter=all&fields=photo_400_orig&${this.commonInfo}`;
    }
    getConversationsById(peerId, groupId) {
        return `${this.url}/messages.getConversationsById?peer_ids=${peerId}&group_id=${groupId}&filter=all&fields=photo_400_orig&${this.commonInfo}`;
    }
}
export const urls = new Urls();
//https://api.vk.com/method/messages.getConversationsById?peer_ids=2000000003&group_id=228393012&filter=all&fields=photo_400_orig&access_token=vk1.a.xE2w5YscfBQaVApQX7U_695tv6v5MgR221QmgQGeg0IOErB-wcdM0hAJtVbR7H5cPljEVyZop1SH8myN81-XVFaVR1eKc7SXVQBRjI4lvA5j4n-oGzX_yTz5bcyG6FwbyN9hx3dmPXXjvNZq-cbadKhQdqBBj-QtYMaY6hvq21h792y4MdCto2NhV4BFfXPibIUyCJcaav13m4Rtqn7TLg&v=5.199
//https://api.vk.com/method/messages.getConversations?group_id=228393012&filter=all&fields=photo_400_orig&access_token=vk1.a.xE2w5YscfBQaVApQX7U_695tv6v5MgR221QmgQGeg0IOErB-wcdM0hAJtVbR7H5cPljEVyZop1SH8myN81-XVFaVR1eKc7SXVQBRjI4lvA5j4n-oGzX_yTz5bcyG6FwbyN9hx3dmPXXjvNZq-cbadKhQdqBBj-QtYMaY6hvq21h792y4MdCto2NhV4BFfXPibIUyCJcaav13m4Rtqn7TLg&v=5.199
//vk1.a.xE2w5YscfBQaVApQX7U_695tv6v5MgR221QmgQGeg0IOErB-wcdM0hAJtVbR7H5cPljEVyZop1SH8myN81-XVFaVR1eKc7SXVQBRjI4lvA5j4n-oGzX_yTz5bcyG6FwbyN9hx3dmPXXjvNZq-cbadKhQdqBBj-QtYMaY6hvq21h792y4MdCto2NhV4BFfXPibIUyCJcaav13m4Rtqn7TLg
