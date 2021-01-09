import * as Oni from 'oni-api';

interface State {
    fileName?: string;
    workspaceName?: string;
    startTime?: number;
}

export default class DiscordActivity {
    private _state: State | null = null;
    
    public constructor() {
        this._state = {
            fileName: "Nothing",
            workspaceName: "None",
            startTime: new Date().getTime()
        }
    }

    public getState() {
        return this._state;
    }

    public updateState(oni: Oni.Plugin.Api){
        this._state = {
            ...this._state,
            fileName: oni.editors.activeEditor.activeBuffer.filePath.split("\\").pop(),
            workspaceName: oni.workspace.activeWorkspace.split("\\").pop()
        }
    }
    
    public generateActivity(): any {
        return {
            details: `Editing: ${this._state.fileName}`,
            state: `Workspace: ${this._state.workspaceName}`,
            startTimestamp: this._state.startTime,
            largeImageKey: 'oni',
            largeImageText: `Editing: ${this._state.fileName}`,
            instance: false
        }
    }
}
