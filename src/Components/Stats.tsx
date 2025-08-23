import Avatar from "./Avatar.tsx";
import {changeStats} from "../features/stats/statsSlice.ts";
import {useAppDispatch, useAppSelector} from "../features/configoStore/hook.ts";
import {StatsKey} from "../features/utils/statsKey.ts";

const Stats = () => {
    const {followers, following} = useAppSelector(state => state.stats);
    const {name} = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();

    return (
        <div className={'user-stats'}>
            <div>
                <Avatar/>
                {name}
            </div>
            <div className={'stats'}>
                <div
                    onClick={() => dispatch(changeStats(StatsKey.FOLLOWERS, 1))}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        dispatch(changeStats(StatsKey.FOLLOWERS, -1));
                    }}
                >Followers: {followers}</div>
                <div
                    onClick={() => dispatch(changeStats(StatsKey.FOLLOWING, 1))}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        dispatch(changeStats(StatsKey.FOLLOWING, -1));
                    }}
                >Following: {following}</div>
            </div>
        </div>
    );
};

export default Stats;