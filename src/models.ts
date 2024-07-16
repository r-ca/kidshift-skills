// TODO: モデルを切り出す

// Parent
interface ParentResponse {
    id: string,
    email: string,
    name: string,
}

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

// Task
interface TaskBaseItem {
    id: string,
    name: string,
    iconEmoji?: string,
    bgColor?: string,
    reward: number
}

interface TaskResponse extends TaskBaseItem {
    // 追加プロパティ
    attachedChlidren: String[]
}

interface TaskListResponse {
    list: TaskBaseItem[]
}

// Token
interface TokenBaseItem {
    accessToken: string,
}

interface TokenResponse extends TokenBaseItem {
    // 追加プロパティ
}

export {
    ParentResponse,
    ChildBaseItem,
    ChildDetailsResponse,
    ChildListResponse,
    ChildResponse,
    TaskBaseItem,
    TaskResponse,
    TaskListResponse,
    TokenBaseItem,
    TokenResponse,
}

