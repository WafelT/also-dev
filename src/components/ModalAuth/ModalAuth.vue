<template>
	<div class="modal-auth" @click="authToggle(false)">
		<div @click.stop class="modal-dialog modal-dialog-auth">
			<button class="close-auth" @click="authToggle(false)">&times;</button>
			<form id="logInForm">
				<fieldset class="modal-body">
					<legend class="modal-title">Авторизация</legend>
					<label class="label-auth">
						<span>Логин</span>
						<input id="login" type="text">
					</label>
					<label class="label-auth">
						<span>Пароль</span>
						<input id="password" type="password">
					</label>
				</fieldset>
				<!-- /.modal-body -->
				<div class="modal-footer">
					<div class="footer-buttons">
						<button class="button button-primary button-login" @click.prevent="authentication(true)">Войти</button>
					</div>
				</div>
			</form>
			<!-- /.modal-footer -->
		</div>
		<!-- /.modal-dialog -->
	</div>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from 'vuex';
import './ModalAuth.scss';


export default {
    name: 'ModalAuth',
	computed: {
		...mapGetters(['getHasAuthorized']),
	},
	methods: {
		...mapActions(['toggleAuthAction', 'hasAuthorizedAction']),
		...mapMutations(['toggleAuthMutation', 'hasAuthorizedMutation']),
		authToggle(flag) {
			this.toggleAuthMutation(flag)
		},
		authentication(flag) {
			this.hasAuthorizedMutation(flag)
			this.toggleAuthMutation(false)
		}
	},
}
</script>