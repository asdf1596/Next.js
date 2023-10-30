export function LogOutBtn() {
    return (
        <button
            onClick={() => {
                signOut();
            }}
        >
            로그아웃
        </button>
    );
}
