/*
 * LiskHQ/lisk-explorer
 * Copyright © 2018 Lisk Foundation
 *
 * See the LICENSE file at the top-level directory of this distribution
 * for licensing information.
 *
 * Unless otherwise agreed in a custom licensing agreement with the Lisk Foundation,
 * no part of this software, including this file, may be copied, modified,
 * propagated, or distributed except according to the terms contained in the
 * LICENSE file.
 *
 * Removal or modification of this copyright notice is prohibited.
 *
 */
import AppFilters from './filters.module';

/**
 * @todo check the possibility of removing hard coded hashes
 */
AppFilters.filter('nethash', () => (nethash) => {
	if (nethash === '42cea9d13097437aedb1b0fdd587e18c6e51c8761d144bb36316a1c5ae646efd') {
		return 'Testnet';
	} else if (nethash === 'cd8171332c012514864edd8eb6f68fc3ea6cb2afbaf21c56e12751022684cea5') {
		return 'Mainnet';
	}
	return 'Local';
});
