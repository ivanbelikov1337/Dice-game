import EnterNumber from "@/components/enterNumber/EnterNumber";
import GameControl from "@/components/gameControl/GameControl";
import GameHistory from "@/components/gameHistory/GameHistory";
import GameResult from "@/components/gameResult/GameResult";
import Title from "@/components/title/Title";

export default function Home() {
    return (
        <main>
            <Title/>
            <EnterNumber/>
            <GameControl/>
            <GameResult/>
            <GameHistory/>
        </main>
    );
}
