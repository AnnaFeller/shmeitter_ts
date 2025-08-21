import {useAppDispatch, useAppSelector} from "../features/configoStore/hook.ts";
import {changeAvatar, changeName} from "../features/async/asyncTunk.ts";

interface AvatarSize {
    size?:string;
}

const Avatar = ({size}:AvatarSize) => {
    const {avatar, name} = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();

    return (
        <img
            onClick={() => {
                const url = prompt('Enter new avatar url');
               if(url) dispatch(changeAvatar(url));
            }}
            onContextMenu={e => {
                e.preventDefault();
                const name = prompt('Enter new name');
                if (name)dispatch(changeName(name));
            }}
            className={`user-avatar ${size ?? ''}`}
            src={avatar}
            alt={name}
        />
    );
};

export default Avatar;