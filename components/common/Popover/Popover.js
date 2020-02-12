import React from 'react';
import { Intent, Popover as PPopover, PopoverInteractionKind, Position } from "@blueprintjs/core";
import './style.scss';


const Popover = ({ children, content }) => {
    return (
        <div className="popover">
            <div className="body">
                <PPopover
                    interactionKind={PopoverInteractionKind.CLICK}
                    popoverClassName="bp3-popover-content-sizing"
                    canEscapeKeyClose={true}
                    usePortal={true}
                    content={content}
                >
                    {children}
                </PPopover>
            </div>
        </div>
    );
}

export default Popover;
