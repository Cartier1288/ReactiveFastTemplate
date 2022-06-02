import { FormattedMessage } from 'react-intl';

export default function NOTFOUND(props) {
    return (
        <div style={{textAlign: "center"}}>
            <FormattedMessage
                id="app.err404"
                defaultMessage="404 Page Not Found"
            />
        </div>
    );
}