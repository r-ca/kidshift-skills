
// Child
interface ChildBaseItem {
    id: string,
    name: string,
}

interface ChildDetailsResponse extends ChildBaseItem {
    // 追加プロパティ
    createdAt: Date,
    homeGroupId: string,
}

interface ChildListResponse {
    list: ChildResponse[]
}

interface ChildResponse extends ChildBaseItem {
    // 追加プロパティ
}
